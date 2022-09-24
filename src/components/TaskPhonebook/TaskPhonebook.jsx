import Section from '../Section';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { ConfettiContainer } from '../Confetti/Confetti';

import 'bootstrap/dist/css/bootstrap.min.css';
import s from './TaskPhonebook.module.css';

const TaskPhonebook = () => {
  return (
    <div className={s.box}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Filter />

      <ContactList />
      <ConfettiContainer />
    </div>
  );
};

export default TaskPhonebook;
