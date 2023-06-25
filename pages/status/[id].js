import Devit from "@/components/Devit"
import { firestore } from "@/firebase/admin"
import { useRouter } from "next/router"

export default function DevitPage(props) {

    const router = useRouter()
    if(router.isFallback){
        return <h1>Loading...</h1>
    }

    return (
    <>
        <Devit {...props}></Devit>
        <style jsx>{``}</style>
    </>
    )
}

/*
//Esto se ejecuta siempre en el servidor
export async function getServerSideProps(context) {
    // params, req, res, query
    const { params,res } = context
    const { id } = params

    const apiResponse = await fetch(`http://localhost:3000/api/devits/${id}`)
    if(apiResponse.ok){
        const props = await apiResponse.json()
        return {props}
    }
    //Si no encuentra el devit a la bd o hay error lo redirigimos
    if(res){
        res.writeHead(301, { Location: "/home" }).end()
    }
}
*/


//Static Props
//Aqui le decimos los paths que tiene que crear
export async function getStaticPaths () {
    return {
        paths: [{ params: { id: "nDXABiBFYuy2TM35UqP2" }} ],
        //Si esta a false, solo tendra la pagina estatica ya creada, si pones un path que no tiene en el arrayde paths da error 404
        //Si pones fallback a true
        fallback: true,
    }
}

//Esto se ejecuta en build time, para generar paginas estaticas, esto genera el html de cada una de la paginas dinamicas
export async function getStaticProps(context) {
    const { params } = context
    const { id } = params

    return firestore.collection('devits').doc(id).get().then(doc => {
        const data = doc.data()
        const id = doc.id
        const { createdAt } = data
        
        // const intl = new Intl.DateTimeFormat('es-ES')
        // const date = new Date(createdAt.seconds * 1000)
        // const normalizedCretedAt = intl.format(date)
  
        // se devuelva la id del documento y con los ... se envian todos los campos del document
        const props = ({
          ...data,
          id,
          createdAt: +createdAt.toDate()
        })

        return { props }

    }).catch(() => {
        return { props: {} }
    })
}


//Usamos mejor getServerSideProps
/*
DevitPage.getInitialProps = (context) => {
    const { query,res } = context
    const { id } = query

    //console.log('CONSOLA DE SERVIDOR', id)
    //console.log(context)
    return fetch(`http://localhost:3000/api/devits/${id}`)
    .then(apiResponse => {
        if(apiResponse.ok){
            return apiResponse.json()
        }
        //Si no encuentra el devit a la bd o hay error lo redirigimos
        if(res){
            res.writeHead(301, { Location: "/home" }).end()
        }
    })
}
*/