<?php
       header('Content-Type:application/json; charset=utf-8');
    $dataList='[{"id":1,"content":"asas aca","logo":"沸"},{"id":2,"content":"1212","logo":"沸"},{"id":3,"content":"2324","logo":"沸"},{"id":4,"content":"a2323","logo":"沸"},{"id":5,"content":"asas aca","logo":"沸"},{"id":6,"content":"1212","logo":"沸"},{"id":7,"content":"2324","logo":"沸"},{"id":8,"content":"a2323","logo":"沸"},{"id":9,"content":"a2323","logo":"沸"}]';

    $arr = (array) json_decode($dataList,true);  
    // $arr=json_decode($dataList)
    exit(json_encode($arr))
?>