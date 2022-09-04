// import {FaGithub} from 'react-icons/fa'
// import {styles} from './styles'
// import {FiX} from 'react-icons/fi'
import { Container} from './styles'
// import {signIn, signOut, useSession} from 'next-auth/client'

export function SignInButton (){

    <Container>

        // const [session] = useSession()   
        const user = false 

        return user ? (
            <button 
                type="button"
                className="signInButton"
                // onClick={() => signOut()}
            >
                {/* <FaGithub color="#04d361"/> */}
                Carlos Henrique
                {/* {session.user.name} */}
                {/* <FiX color="#737380" className="closeIcon"/> */}
            </button>
        ) : (
            <button 
                type="button"
                className="signInButton"
                // onClick={() => signIn('github')}
            >
                {/* <FaGithub color="#eba417"/> */}
                Sign In with Github
            </button>
        );
    </Container>

    
}