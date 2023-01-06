# Study Kubernetes

- 更方便管理 containers => scaling...
- a node is a VM (?) a like-EC2?

---

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

> Copying `kube-config` into `./kube/config` (config is a file) can ignore prefix `KUBECONFIG=~/.kube/<name of kube-config>`

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

---

**Better solution with stern**

```
KUBECONFIG=~/.kube/<name of kube-config> stern <pod-prefix> -n <namespace>
```

> `brew install stern`

It improves

1. prefix searching (random names of a pod issue + one system multiple pods issue)
2. auto update logs (no need re-run commands)

---

**Better solution with stern + kubectx + config file**

```
// show all contexts (in config file)
kubectx

// switch to specific context (no need to set namespace anymore)
kubectx <context>
```

and easily

```
stern <pod-prefix>
```

## Other Commands

```
kubectl get deployment <pod> -o yaml
```

## Useful aided Tools

- stern
- kubectx

