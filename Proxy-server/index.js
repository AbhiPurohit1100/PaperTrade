const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();


const targetUrl = 'https://api.backpack.exchange';


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Expose-Headers', 'Content-Length, Content-Range');
    next();
});

app.use('/', createProxyMiddleware({
    target: targetUrl,
    changeOrigin: true,
    onProxyReq: (proxyReq, req, res) => {
        
    },
    onProxyRes: (proxyRes, req, res) => {
        
    }
}));

const port = 3001;
app.listen(port, () => {
    console.log(`Proxy server running on http://localhost:${port}`);
});