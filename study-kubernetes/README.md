# Study Kubernetes

Install with Homebrew on macOS

```
brew install kubectl
```

Update AWS EKS

```
KUBECONFIG=~/.kube/<name of kube-config> aws eks update-kubeconfig --region <region> --name <name>
```

> May need extra values in kube config file to get authorized

## Usage

Get namespace

```
KUBECONFIG=~/.kube/<name of kube-config> kubectl get namespace
```

Get pod

```
KUBECONFIG=~/.kube/<name of kube-config> kubectl get pod -n <namespace>
```

### Get logs of pod

```
KUBECONFIG=~/.kube/<name of kube-config> kubectl logs <pod> -n <namespace>
```

Better solution

```
KUBECONFIG=~/.kube/<name of kube-config> stern <pod> -n <namespace>
```

> `brew install stern`

It improves

1. prefix searching (random names of a pod issue + one system multiple pods issue)
2. auto update logs (no need re-run commands)

## Useful aided Tools

- stern
- kubectx

