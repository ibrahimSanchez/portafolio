import { ExpandableSideMenu } from "@/components";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div >

      <ExpandableSideMenu />
      
      <main className="flex-grow pl-16 bg-background-secondary text-text-base">

        {children}

      </main>
    </div>


  );
}
