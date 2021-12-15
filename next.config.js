module.exports = {
    async redirects(){
        return [
            {
                source: '/api',
                destination: '/apidoc',
                permanent: true
            }
        ]
    }
}