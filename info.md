## example of mermaid use
```mermaid
graph TD;
  subgraph Traffic Flow
    A[Internet Traffic]
    B[Load Balancer]
    A -->|1. Traffic comes to Load Balancer (Encrypted)| B
  end
  
  subgraph API Server
    B -->|2. Traffic flows to API Server| C[API Server]
    C -->|3. API Server uses DB| D[Database]
    C -->|4. API Server uses Cache| E[Cache]
  end
  
  subgraph Angular Web
    F[Customer]
    G[Angular Web Server 1]
    H[Angular Web Server 2]
    F -->|5. Customer uses Angular Web (Encrypted)| G
    F -->|5. Customer uses Angular Web (Encrypted)| H
    G -->|6. Angular Web uses API (Encrypted)| C
    H -->|6. Angular Web uses API (Encrypted)| C
  end
In this modified script, I added "(Encrypted)" labels to indicate that the traffic between the internet and the load balancer as well as between the Angular web application and the API server is encrypted. This visually represents that encryption is in place for these connections.



```



