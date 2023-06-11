import { Title } from './SectionTitle.styled';

export function Section({ title, children }) {
  return (
    <div>
      <Title>{title}</Title>
      {children}
    </div>
  );
}
