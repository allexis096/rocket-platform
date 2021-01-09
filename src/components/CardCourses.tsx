import { Container, Card, Content } from '../styles/components/CardCourses';

interface ICardProps {
  image: React.ReactNode;
  text: string;
  name: 'discover' | 'gostack' | 'expert';
}

export default function CardCourses({ image, text, name }: ICardProps) {
  return (
    <Container name={name}>
      <Card>
        <Content>
          {image}
          <p>{text}</p>
        </Content>
      </Card>
    </Container>
  );
}
