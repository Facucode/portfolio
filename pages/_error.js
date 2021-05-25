import Layout from '../components/Layout'

const _error = () =>{
    return (
        <Layout>
            {
                    statusCode ? ( <p className="text-center">Could not load your page: Status Code {statusCode}</p>)
                : (<p>Could not get this page</p>)}
           
        </Layout>
    )
}

export default _error