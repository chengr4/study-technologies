# AWS EKS

To fetch the AWS EKS cluster's information and store it in the config file

```sh
aws eks udpate-kubeconfig --name <cluster_name> --region <region>
```

## Permissions



## Master Nodes

## Worker Nodes

- Worker nodes will run in group: A collection of EC2 at the same type

Policies:

- CNI Policy: to modify the IP address configuration on your worker nodes
- Woker Node Policy: Allow the worker nodes to connect to the EKS cluster
- EC2ContainerRegistryReadOnly: pull images from ECR

## Other Commands

| Command | Description |
| ------- | ----------- |
| ||