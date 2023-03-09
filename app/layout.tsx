import Sidebar from "./components/Sidebar";
import { personalData} from "../data/page-data"
import "./global.css"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  return (
    <html>
      <head />
      <body className="flex flex-col sm:flex-row">
        <Sidebar data={personalData}/>
        <main className="grow-full w-full sm:basis-2/3 p-8 sm:p-16 ml-auto">
        {children}
        </main>
        </body>
    </html>
  )
}
