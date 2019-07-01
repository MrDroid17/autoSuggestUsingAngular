import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  indianStates: any[]
  states: any[]
  title = 'autosuggestionApp';
  keyword:string;

  constructor(){}
  ngOnInit(){
    this.keyword = '';
    this.states = [
     {id: "AP", state:"Andhra Pradesh"},
      {id:"AR", state:"Arunachal Pradesh"},
      {id:"AS", state:"Assam"},
      {id:"BR", state:"Bihar"},
      {id:"CG", state:"Chhattisgarh"},
      {id:"CH", state:"Chandigarh"},
      {id:"DN", state:"Dadra and Nagar Haveli"},
      {id:"DD", state:"Daman and Diu"},
      {id:"DL", state:"Delhi"},
      {id:"GA", state:"Goa"},
      {id:"GJ", state:"Gujarat"},
      {id:"HR", state:"Haryana"},
      {id:"HP", state:"Himachal Pradesh"},
      {id:"JK", state:"Jammu and Kashmir"},
      {id:"JH", state:"Jharkhand"},
      {id:"KA", state:"Karnataka"},
      {id:"KL", state:"Kerala"},
      {id:"MP", state:"Madhya Pradesh"},
      {id:"MH", state:"Maharashtra"},
      {id:"MN", state:"Manipur"},
      {id:"ML", state:"Meghalaya"},
      {id:"MZ", state:"Mizoram"},
      {id:"NL", state:"Nagaland"},
      {id:"OR", state:"Orissa"},
      {id:"PB", state:"Punjab"},
      {id:"PY", state:"Pondicherry"},
      {id:"RJ", state:"Rajasthan"},
      {id:"SK", state:"Sikkim"},
      {id:"TN", state:"Tamil Nadu"},
      {id:"TR", state:"Tripura"},
      {id:"UP", state:"Uttar Pradesh"},
      {id:"UK", state:"Uttarakhand"},
      {id:"WB", state:"West Bengal"}
   ];
  }


  filteredResult(event){
this.keyword += event.key;
    console.log(this.keyword);
    if(this.keyword.length % 3 === 0 || this.keyword == ''){
      debugger
      this.states = this.indianStates.map( element =>{
        let st = element.state.toLowerCase();
        let key = this.keyword.toLowerCase();
        debugger
        return st.includes(key);
      })
    }
  }
}
