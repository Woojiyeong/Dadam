import BrewingTimer from '../components/BrewingTimer';
import { TeaProvider } from "../context/TeaContext";

export default function TimerPage() {
  return (
    <TeaProvider>
      <BrewingTimer />
    </TeaProvider>
  );
}
