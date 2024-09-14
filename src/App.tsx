import { Dialog } from "./components/ui/dialog";
import { CreateGoal } from "./components/create-goal";
import { EmptyGoals } from "./components/empty-goals";
import { Summary } from "./components/summary";
import { useQuery } from "@tanstack/react-query";
import { getSummary } from "./http/get-summary";

export function App() {
  const { data } = useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
    staleTime: 1000 * 60,
  });

  // O staleTime permite que caso você precise utilizar esses dados novamente em alguma outra parte da aplicação,
  // ele não carregue esses dados novamente, ele apenas os reuse, pois serão armazenados no cache por 60s

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  );
}
