import { Switch } from 'react-router-dom';
import Route from './Route';
import Hero from '../components/Hero/Hero';

export default function Routes() {
  return (
    <Switch>
      <Route patch="/hero" exact component={Hero} />
    </Switch>
  )
}