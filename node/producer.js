  const kafka = require("kafka-node");
  const client = new kafka.KafkaClient({kafkaHost: "localhost:9092"});
  const producer = new kafka.Producer(client);

  const payload = [{ topic: "test_topic", messages: JSON.stringify({
    "name" : "juan"
  })}];

  setInterval( () => {  
    producer.send(payload, function(error, result) {   
      console.log("Sending payload to Kafka");    
      if (error) {      
        console.log( "Sending payload failed: ", error);    
      } else {      
        console.log("Sending payload result:", result);    
      }  
    });
  }, 10000) 