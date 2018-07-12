import React, { Component } from 'react';
import data from './data.json';
import './App.css';
import './Column.css';

FusionCharts.ready(function() {
    var columnChart = new FusionCharts({
        "type": "column3d",
        "renderAt": "chartContainer",
        "width": "500",
        "height": "300",
        "dataFormat": "json",
        "dataSource": {
            "chart": {
                "caption": "This chart is from the json.",
                "subCaption": "Nadia's Subscription Costs",
                "xAxisName": "Subscriptions",
                "yAxisName": "Price (USD)/Month",
                "theme": "fint",
                "baseFont": "Verdana",
        "baseFontSize": "13",
        "baseFontColor": "#0066cc",
        "baseFont": "Verdana",
        "decimals": "2",
    
            },
        });

        columnChart.render();

        export default ColumnChart;