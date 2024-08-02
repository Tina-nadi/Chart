<?php  


$values_1 = array();  
$values_2 = array();
while(true){   
    $temp_1 = rand(24,36);  
    $temp_2 = rand(24,36);  
    
    $values_1[] = $temp_1;   
    $values_2[] = $temp_2;   
    
    $obj_1 = array(  
        "name" => 162,  
        "value" => $values_1 
    );  
    $obj_2 = array(  
        "name" => 165,  
        "value" => $values_2
    );  

    $dataArray = array($obj_1, $obj_2);  
    
    $data = json_encode(array( $dataArray), JSON_PRETTY_PRINT);  
    echo $data;  
    
    sleep(2);  
}

?>