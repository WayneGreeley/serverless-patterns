import { APIGatewayProxyEventV2WithRequestContext } from "aws-lambda"
import {
  EventBridgeClient,
  PutEventsCommand,
  PutEventsCommandInput,
  PutEventsCommandOutput,
} from "@aws-sdk/client-eventbridge";
import { my_object } from "../../shared/types";

export const handler = async (event: APIGatewayProxyEventV2WithRequestContext<any>) => {
    
  console.info('event received:', event);
  
  const method = event.requestContext.http.method;
  
  let responseCode = 200
  let responseMsg = ""

  if (method === 'POST') {
    responseMsg = JSON.stringify({ "output":"added", ...JSON.parse(event.body)})
    
    const my_event_body: my_object = {event_key: "hello", event_name: "world"}
    
  } else {
    responseCode = 400
    responseMsg = `Invalid HTTP method: ${method}`
  }  
  
  const response = {
    statusCode: responseCode,
    body: responseMsg
  };
 
  console.info(`response from: ${event.requestContext.domainName} statusCode: ${response.statusCode} body: ${response.body}`);
  return response;
}
