import Header from '../components/Header';
import CardCourses from '../components/CardCourses';
import Discover from '../../public/discover.svg';
import GoStack from '../../public/gostack.svg';
import Expert from '../../public/expert.svg';

import { Courses } from '../styles/pages/dashboard';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Courses>
        <CardCourses
          name="discover"
          image={<Discover />}
          text="Comunidade e conteúdo gratuito que te levarão para o próximo nível em programação"
        />
        <CardCourses
          name="gostack"
          image={<GoStack />}
          text="Treinamento imersivo nas tecnologias mais modernas de desenvolvimento web e mobile"
        />
        <CardCourses
          name="expert"
          image={<Expert />}
          text="Aulas práticas e direto ao ponto com profissionais que respiram tecnologia diariamente"
        />
      </Courses>
    </>
  );
}
