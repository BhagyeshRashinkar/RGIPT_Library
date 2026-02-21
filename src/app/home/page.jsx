"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useAuth } from "@/components/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Home() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/");
    }
  }, [router]);

  if (!user) return null;

  const years = [
    { href: "/1st_year", label: "1st Year" },
    { href: "/2nd_year", label: "2nd Year" },
    { href: "/3rd_year", label: "3rd Year" },
    { href: "/4th_year", label: "4th Year" },
  ];

  return (
    <div className="main">
      <Header />
      <section id="year-page">
        <h2>Select Your Year</h2>
        <hr />
        <div className="selector-buttons row">
          {years.map((year) => (
            <div className="col col-lg-3 col-sm-6" key={year.href}>
              <h3>
                <Link href={year.href} target="_blank">
                  {year.label}
                </Link>
              </h3>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
