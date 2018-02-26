var myChart1 = {
    "type":"area",
    "series":[
      {"values":[76,23,15,85,13]}
    ]
  };
  var myChart2 = {
      "type":"bullet",
      "series":[
        {"values":[14,29,18,20,34], "goals":[15,30,21,5,30]}
      ]
  };
  var myChart3 = {
      "type":"pie",
      "series":[
        {"values":[15]}, 
        {"values":[30]}, 
        {"values":[34]}
      ]
  };

  zingchart.render({
    id:'chartDiv1',
    data:myChart1,
    height:300,
    width:500
  });
  zingchart.render({
    id:'chartDiv2',
    data:myChart2,
    height:300,
    width:500
  });
  zingchart.render({
    id:'chartDiv3',
    data:myChart3,
    height:300,
    width:500
  });
