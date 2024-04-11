# AZ AKS

Fetch credentials for a managed Kubernetes cluster and store them in the kubeconfig file

```sh
# Get access credentials for a managed Kubernetes cluster
az aks get-credentials --name MyManagedCluster --overwrite-existing --resource-group MyResourceGroup
```