export default async function ({ $axios, redirect }) {
    // If the user is not authenticated
    const path = window.location.pathname
    // const accessToken = localStorage.getItem('accessToken')
    const accessToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI0NzkzMjg3LCJpYXQiOjE3MjQ3ODk2ODcsImp0aSI6IjE0ZTBlMTFlMTBiMjQwYzE4YWI3NWQwMzQ2ZWIzMWVhIiwidXNlcl9pZCI6ImM4MGFiZjQyLTkwZjMtNDZlYS04YTdiLTgwZDEwZGM1OTY0YSIsInN0YXR1cyI6IlZFUklGSUVEIiwiZmlyc3RfbmFtZSI6InQiLCJsYXN0X25hbWUiOiJ0IiwiZW1haWwiOiJ0ZXN0QHRlc3QucnUiLCJwaG9uZSI6Ijc5MDAwMTExMjIzMyJ9.hl0l5khtk0SdyyQ-QTEhDgi5-FdLvjPoIyfXZ-yvYDoHpIYGLa5l1daY0ajxBAp0jOTZWtjRQYyN16Z9ud-iugRHq1Lce1REVcE0B9flbYmc4rRQoica1DSV2NS0RVDWtBTk0H6FF9mHdc_r_h3WkTTcKkQs1nyj4fuEi85a2g3DMI35F3cpGLMvtfOubfHbTSTcOfRxlU0wENn8JhNTEqNnn8cago6aMo4ndNJgMa5z_yHaPsnG-A_bF5R1prdsVaQyRLVlTiZgSfr2w9HIR4XWdosBNATmNqD1PfOENl9wvcG8VDJmRX3wfSJMYIKK5RXUONkXzNj6weikeM_fGQ'
    // const refreshToken = localStorage.getItem('refreshToken')
    // const refreshToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyNzIwODg4NywiaWF0IjoxNzI0Nzg5Njg3LCJqdGkiOiJhNTdkYWU1OTFhMmM0N2U0YTQxNmNmZTRiY2FhMDllMCIsInVzZXJfaWQiOiJjODBhYmY0Mi05MGYzLTQ2ZWEtOGE3Yi04MGQxMGRjNTk2NGEiLCJzdGF0dXMiOiJWRVJJRklFRCIsImZpcnN0X25hbWUiOiJ0IiwibGFzdF9uYW1lIjoidCIsImVtYWlsIjoidGVzdEB0ZXN0LnJ1IiwicGhvbmUiOiI3OTAwMDExMTIyMzMifQ.NFRZ5ao4C8DQTvAf-cWo7QeKywOH-n_FTNbvhkr-RH4QhpgzLN03z3sc_SGa2yviZR2zQXVrrmXgqiNs_0qb-gV9jUKUuU8W4FSnPnQOKUFlOKD51REK0TPx4FYmij8iTnhQczcQIgbCtdCWSPz7ZECXt2-j0B-ZUJlfXCb2Ff_DnzSjGMen5nd-6ecl5meTAh3N41vNAFSXauuRib5_GtxSl1zfhVWz6_P6m9EwJfOY8gVR67cpn2Y0rY34uzKrbJ3LMGUo-FW5tFr4gPTNJ3bLcaos3nWC-3ygZ0cwOCsVfiK0QXVvDNP59aylG2XRtyZgA5LHR38haozKsIjCjg'

    if (accessToken) {
        const res = await $axios.get('https://az-most.ru/api/auth/session', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
                'Access-Control-Allow-Headers': 'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization'
            }
        })
        console.log(res)
    } else if (!path.includes('login')) {
        // return redirect('/login')
    }
}
