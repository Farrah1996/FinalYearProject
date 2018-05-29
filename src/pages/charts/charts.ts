import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { MemberDetails } from '../../model/memberDetails';
import { MemberDetailsService } from '../../service/memberDetails.service';
import { Chart } from 'chart.js'; 
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { TabsPage } from '../tabs/tabs';
import { Member } from '../../model/member';
import { MemberService } from '../../service/member.service';

@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html'
})


export class ChartsPage {
  
  data: Observable<MemberDetails[]>;
  firebase: AngularFireList<any>;

  cats = [
    {value: 0, name: 'Weight'},
    {value: 1, name: 'Height'},
    {value: 2, name: 'Bodyfat'},
    {value: 3, name: 'Waist'},
    {value: 4, name: 'Bust'},
    {value: 5, name: 'BMI'},
  ];
 
  details = {
    member_id: null,
    value: 0,
    loss: false,
    cat: 0,
    date: null,
  }

  @ViewChild('valueBarsCanvas') valueBarsCanvas;
  valueBarsChart: any;
  @ViewChild('barCanvas') barCanvas;
  barChart: any;

  chartData = null;
  memberDetails : MemberDetails = new MemberDetails;
  member : Member = new Member;

  constructor(public navCtrl: NavController, public memberDetailsService: MemberDetailsService, public storage: Storage, public memberService: MemberService, public navParams: NavParams,private db:AngularFireDatabase, private toastCtrl: ToastController) {
    storage.get('member_id').then((val) => {
      // this.user=db.list('User').valueChanges();
      // console.log("user id: ",val)    
    });
  }

  ionViewDidLoad() { 
    this.storage.get('member_id').then((val) => {
      this.member.member_id = val;
    this.firebase = this.db.list('Members Details/'+this.member.member_id, ref => ref.orderByChild('member_id'));

    // Catch any update to draw the Chart
    this.firebase.valueChanges().subscribe(result => {
        if (this.chartData) {
          this.updateCharts(result)
        } else {
          this.createCharts(result)
        }
      })
    }
    )}

    addmemberdetails(){
      this.storage.get('member_id').then((val) => {
        if (val != null) {
        this.member.member_id = val;
        this.details.member_id = val;
        this.firebase.push(this.details).then(() => {
        this.details = {
        member_id: val,
        value: 0,
        cat: 0,
        loss: false,
        date: new Date()
        };
        console.log(this.details);
        let toast = this.toastCtrl.create({
            message: 'New Member Details added',
            duration: 2000
          });
          toast.present();
        })
      }
    })
  }

    getReport() {
        let reportByCategory = {
          'Weight': null,
          'Height': null,
          'Bodyfat': null,
          'Waist': null,
          'Bust': null,
          'BMI': null
        };
       
        for (let trans of this.chartData) {
          if (reportByCategory[trans.cat]) {
            if (trans.loss) {
              reportByCategory[trans.cat] -= +trans.value;
            } else {
              reportByCategory[trans.cat] += +trans.value;
            }
          } else {
            if (trans.loss) {
              reportByCategory[trans.cat] = 0 - +trans.value;
            } else {
              reportByCategory[trans.cat] = +trans.value;
            }
          }
        }
        return Object.keys(reportByCategory).map(a => reportByCategory[a]);
      }

      createCharts(data) {
        this.chartData = data;
       
        // Calculate Values for the Chart
        let chartData = this.getReport();
       
        // Create the chart
        this.valueBarsChart = new Chart(this.valueBarsCanvas.nativeElement, {
          type: 'bar',
          data: {
            labels: Object.keys(this.cats).map(a => this.cats[a].name),
            datasets: [{
              data: chartData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
          },
          options: {
            legend: {
              display: false
            },
            tooltips: {
              callbacks: {
                label: function (tooltipItems, data) {
                  return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] +' ';
                }
              }
            },
            scales: {
              xAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }],
              yAxes: [{
                ticks: {
                  callback: function (value, index, values) {
                    return value + '';
                  },
                  suggestedMin: 0
                }
              }]
            },
          }
        });

        // Create the chart
        this.barChart = new Chart(this.barCanvas.nativeElement, {
          type: 'line',
          data: {
            labels: Object.keys(this.cats).map(a => this.cats[a].name),
            datasets: [{
              data: chartData,
              backgroundColor: 
                'rgba(255, 99, 132, 0.2)',
            borderColor: 
                'rgba(255,99,132,1)',
            borderWidth: 1
            }]
          },
          options: {
            legend: {
              display: false
            },
            tooltips: {
              callbacks: {
                label: function (tooltipItems, data) {
                  return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] +' ';
                }
              }
            },
            scales: {
              xAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }],
              yAxes: [{
                ticks: {
                  callback: function (value, index, values) {
                    return value + '';
                  },
                  suggestedMin: 0
                }
              }]
            },
          }
        });
      }

      updateCharts(data) {
        this.chartData = data;
        let chartData = this.getReport();
       
        // Update our dataset
        this.valueBarsChart.data.datasets.forEach((dataset) => {
          dataset.data = chartData
        });
        this.valueBarsChart.update();

        this.barChart.data.datasets.forEach((dataset) => {
          dataset.data = chartData
        });
        this.barChart.update();
      }
    }