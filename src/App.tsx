import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  

   return (
      <>
         <Heading attr={123} attr2='String'>
            Ola mundo 1
         </Heading>
         

         <p>
            Com a crescente complexidade das aplicações web, a arquitetura de software tornou-se um fator crítico para a
            manutenibilidade e escalabilidade dos sistemas. Historicamente dominado por abordagens monolíticas, o
            desenvolvimento tem migrado para paradigmas modulares visando contornar desafios de acoplamento e gestão de
            código.
         </p>
      </>
   );
}
