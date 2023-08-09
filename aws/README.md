# Study AWS

- [EKS](./eks.md)

## RDS

- By default, the DB will bee deployed inside the default virtual private cloud (VPC)

- Public access: if want local to connect, please set true

## Elastic Kubernetes Service (EKS)



## Lambda

- AWSLambdaBasicExecutionRole - 將日誌上傳至 CloudWatch 的許可。
- AWSLambdaDynamoDBExecutionRole - 從 Amazon DynamoDB Streams 讀取記錄的許可。
- AWSLambdaKinesisExecutionRole - 從 Amazon Kinesis 資料串流或取用者中讀取事件的許可。
- AWSLambdaMQExecutionRole - 從 Amazon MQ 代理程式中讀取記錄的許可。
- AWSLambdaMSKExecutionRole - 從 Amazon Managed Streaming for Apache Kafka (Amazon MSK) 叢集中讀取記錄的許可。
- AWSLambdaSQSQueueExecutionRole - 從 Amazon Simple Queue Service (Amazon SQS) 佇列中讀取訊息的許可。
- AWSLambdaVPCAccessExecutionRole - 管理彈性網路介面以便將函數連線至 Virtual Private Cloud (VPC) 的許可。
- AWSXRayDaemonWriteAccess - 將追蹤資料上傳至 X-Ray 的許可。
- CloudWatchLambdaInsightsExecutionRolePolicy - 將執行時間指標寫入 CloudWatch Lambda Insights 的許可。
- AmazonS3ObjectLambdaExecutionRolePolicy – 與 Amazon S3 Object Lambda 互動的權限。

## ECR

| Command | Description |
| ------- | ----------- |
| `aws ecr get-login-password` | returns authentication token |


## AWS Secrets Manager

> For environment variables

| Command | Description |
| ------- | ----------- |
| `aws secretsmanager help` ||
| `aws secretsmanager get-secret-value --secret <name> --query SecretString --output text` | `--output text`: get JSON in termial instead of string |

## Cheetsheet

- `aws configure`: 設定 AWS CLI

> Needs IAM USER access key

## Materials

- [how Lambda@edge function works between CloudFront and Origin Server](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-cloudfront-trigger-events.html)

## References

