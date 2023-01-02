# SSH

```
ssh -L 8080:remote_host:80 user@remote_host
```

This will connect port 8080 on the local computer to port 80 on the remote computer, allowing you to access the remote computer's web server by accessing `http://localhost:8080`

## Q/A

Q: What is `-L` of command `ssh -L`

A: 可以使用 `-L` 選項將本地計算機上的某個 port 與遠程計算機上的某個 port 連接起來，使您可以通過本地計算機訪問遠程計算機上的 resource

## References

1. [史上最全 SSH 暗黑技巧详解 (2019)](https://plantegg.github.io/2019/06/02/%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%85%A8_SSH_%E6%9A%97%E9%BB%91%E6%8A%80%E5%B7%A7%E8%AF%A6%E8%A7%A3--%E6%94%B6%E8%97%8F%E4%BF%9D%E5%B9%B3%E5%AE%89/)
2. [A Visual Guide to SSH Tunnels: Local and Remote Port Forwarding (2022.11)](https://iximiuz.com/en/posts/ssh-tunnels/)