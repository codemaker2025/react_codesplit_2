import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { IntlProvider } from "react-intl";
import DatabaseTodos from "./pages/DatabaseTodos";
import LocalStorageTodos from "./pages/LocalStorageTodos";
import PostList from "./pages/PostList";
import SwrInf from "./pages/SwrInf";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import InfiniteScrollApp from "./pages/InfiniteScrollApp";
import FormSubPage from "./pages/FormSubmission";
import Inform from "./components/Inform/Informed";
import FileUpload from "./components/FileUpload/FileUpload";
import MsrUrSpace from "./components/MeasureSpace/MeasureYourSpacePage";
import TestX from "./pages/TestX";
import Urlsearch from "./pages/Urlsearch";
import { RecoilRoot, useRecoilState } from "recoil";
import GraphqlHome from "../src/components/Graphql/GraphqlHome";
import messages from "./i18n/messages";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import LoginForm from "./components/Authentication/GoogleLoginForm";
import { authState } from "./store/authState";
import useAuth from "./hooks/useAuth";
import Tanstack from './pages/Tanstack'
import { LogOut } from "lucide-react";
import LoginLayout from "./components/Authentication/LoginLayout";
import Bfab from './pages/Bfab'
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
  name: "Form Validation",
  version: "1.0",
});

function AppContent() {
  const { login, logout, isAuthenticated: auth } = useAuth();

  const [locale, setLocale] = useState("en");

  return (
    <ApolloProvider client={client}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Router>
          <Toaster />
          <Navbar auth={auth} onLogout={logout} />
          <Routes>
            <Route path="/login" element={<LoginLayout />} />
            <Route path="/" element={<DatabaseTodos />} />
            <Route path="/tanstacktable" element={<Tanstack />} />
            <Route path="/measureyourspace" element={<MsrUrSpace />} />
            <Route path="/search" element={<Urlsearch />} />
            <Route path="/localstorage" element={<LocalStorageTodos />} />
            <Route path="/post" element={<PostList />} />
            <Route path="/scroll" element={<InfiniteScrollApp />} />
            <Route path="/test" element={<TestX />} />
            <Route path="/swr" element={<SwrInf />} />
            <Route path="/form" element={<FormSubPage />} />
            <Route path="/dtle" element={<GraphqlHome />} />
            <Route path="/fileupload" element={<FileUpload />} />
            <Route path="/bfab" element={<Bfab />} />
            <Route
              path="/inform"
              element={<Inform setLocale={setLocale} />}
            />
          </Routes>
        </Router>
      </IntlProvider>
    </ApolloProvider>
  );
}

export default function App() {
  return (
    <RecoilRoot>
      <AppContent />
    </RecoilRoot>
  );
}
