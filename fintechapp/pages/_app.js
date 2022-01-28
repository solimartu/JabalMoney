import "../styles/globals.css";
// import { SessionProvider } from "next-auth/react";
// import { AppProps } from "next/app";



export default function MyApp({
  Component,
  pageProps: { ...pageProps },
  //session,
}) {
  return (
    
     
        <Component {...pageProps} />
       
   
  );
}
