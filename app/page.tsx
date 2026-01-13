import { getAllCheatsheets } from "@/lib/cheatsheets";
import PageClient from "./page-client";

export default async function HomePage() {
  const cheatsheets = await getAllCheatsheets();
  return <PageClient cheatsheets={cheatsheets} />;
}
