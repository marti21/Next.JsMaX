import { firestore } from "@/firebase/admin"

export default (request, response) => {
    const { query } = request
    const { id } = query

    firestore.collection('devits').doc(id).get().then(doc => {
        const data = doc.data()
        const id = doc.id
        const { createdAt } = data
        
        // const intl = new Intl.DateTimeFormat('es-ES')
        // const date = new Date(createdAt.seconds * 1000)
        // const normalizedCretedAt = intl.format(date)
  
        // se devuelva la id del documento y con los ... se envian todos los campos del document
        response.json ({
          ...data,
          id,
          // Esto devuelve el timestamp con el unario (+)
          createdAt: +createdAt.toDate()
        })

    }).catch(() => {
        response.status(404).end()
    })
}