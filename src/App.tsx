import "./App.css";
import { Button, TextField } from "../lib/components/index";

export default function App() {
  return (
    <main className="min-h-screen w-screen justify-center items-center flex flex-col p-20">
      <Button>Button</Button>
      <TextField placeholder="Text Field" />
    </main>
  );
}
