import React from 'react';
import axios from 'axios';

const DATA_URL_ROOT = "http://localhost:5000";
export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        axios.get(DATA_URL_ROOT + '/work_csv')
            .then((res) => {
                console.log(res);
                const csv = this.getCSVFromText(res.data);
                console.log('WORK DATA: ', csv);
            });

            axios.get(DATA_URL_ROOT + '/education_csv')
            .then((res) => {
                console.log(res);
                const csv = this.getCSVFromText(res.data);
                console.log('EDUCATION DATA: ', csv);
                console.log('EDUCATION DATA: ', csv.length);
            });
    }

    getCSVFromText(allText){
        var record_num = 5;  // or however many elements there are in each row
        var allTextLines = allText.split(/\r\n|\n/);
        var entries = allTextLines[0].split(',');
        var lines = [];
    
        var headings = entries.splice(0,record_num);
        while (entries.length>0) {
            var tarr = [];
            for (var j=0; j<record_num; j++) {
                tarr.push(headings[j]+":"+entries.shift());
            }
            lines.push(tarr);
        }
        return lines;
    }

    render(){
        return(
            <div>
                Home
            </div>
        );
    }
}