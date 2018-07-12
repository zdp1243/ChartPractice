import React, { Component } from 'react';
import data from './data.json';
import './Pie.css';

FusionCharts.ready(function() {
    var pieChart = new FusionCharts({
        "type": "pie3d",
        "renderAt": "piechartContainer",
        "width": "500",
        "height": "300",
        "dataFormat": "json",
        "dataSource": {
            "chart": {
                "caption": "This chart is from the json.",
                "subCaption": "Nadia's Subscription Usage by Category",
                "theme": "fint",
                "baseFont": "Verdana",
        "baseFontSize": "13",
        "baseFontColor": "#0066cc",
        "numberPrefix": "$",
            },
        });

        pieChart.render();
