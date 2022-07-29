import { EventBridgeHandler } from "aws-lambda";
import { my_object } from "../../shared/types";

export const handler: EventBridgeHandler<string, my_object, void> = async (
  event
) => {
  console.log(event);

  const theEvent = {
    version: event.version,
    id: event.id,
    detailType: event["detail-type"],
    source: event.source,
    account: event.account,
    time: event.time,
    region: event.region,
    resources: event.resources,
    detail: JSON.stringify(event.detail),
  };

  console.log(theEvent.detail);

}
