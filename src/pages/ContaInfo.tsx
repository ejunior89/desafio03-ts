import { Box, Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../components/AppContext"
import { api } from "../api"

interface UserData {
    email: string,
    password: string,
    name: string,
    balance: number,
    id: string
}

const ContaInfo = () => {
    const [userData, setUserData] = useState<null | UserData>()
    const navigate = useNavigate()

    const { isLoggedIn } = useContext(AppContext)

    !isLoggedIn && navigate('/')

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [])

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    userData === undefined || userData === null ?
                        (
                            <Center>
                                <Spinner size='xl' color='purple' />
                            </Center>
                        ) :
                        (
                            <>
                                <Box bg='green' w='100%' p={4} color='white'>
                                    <Text fontSize='xl' fontWeight='bold'>
                                        Informações da Conta
                                    </Text>
                                    <Text fontSize='xl'>
                                        Nome: {userData?.name}
                                    </Text>
                                    <Text fontSize='xl'>
                                        Email: {userData?.email}
                                        <br />
                                        <br />
                                    </Text>

                                    <a href='/conta/1'>
                                        Voltar
                                    </a>
                                </Box>
                            </>
                        )
                }
            </SimpleGrid>
        </Center>
    )
}

export default ContaInfo;