"use client";

import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  Play,
  ArrowRight,
  Users,
  Zap,
  Shield,
  FileText,
  LayoutDashboard,
  MessageCircle,
} from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productMenuItems = [
    {
      name: "Features",
      href: "#",
      description: "Discover all the powerful features",
    },
    {
      name: "Integrations",
      href: "#",
      description: "Connect with your favorite tools",
    },
    { name: "API", href: "#", description: "Build custom integrations" },
    { name: "Security", href: "#", description: "Enterprise-grade security" },
    { name: "Pricing", href: "#", description: "Simple, transparent pricing" },
  ];

  const resourcesMenuItems = [
    { name: "Documentation", href: "#", description: "Learn how to use Cycle" },
    {
      name: "Help Center",
      href: "#",
      description: "Get help when you need it",
    },
    { name: "Blog", href: "#", description: "Latest news and insights" },
    { name: "Community", href: "#", description: "Join our community" },
    { name: "Status", href: "#", description: "System status and uptime" },
  ];

  return (
    <motion.header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.95)"
          : "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: isScrolled
          ? "1px solid rgba(0, 0, 0, 0.1)"
          : "1px solid rgba(0, 0, 0, 0.05)",
        transition: "all 0.3s ease",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "4rem",
          }}
        >
          {/* Logo */}
          <motion.div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div
              style={{
                width: "2rem",
                height: "2rem",
                backgroundColor: "#000",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "0.75rem",
                  height: "0.75rem",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                }}
              ></div>
            </div>
            <span
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "#000",
                letterSpacing: "-0.025em",
              }}
            >
              Cycle
            </span>
          </motion.div>

          {/* Navigation */}
          <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {/* Product Dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setActiveDropdown("product")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  color: "#374151",
                  fontWeight: "500",
                  fontSize: "0.95rem",
                  padding: "0.5rem 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 0.2s ease",
                }}
              >
                <span>Product</span>
                <ChevronDown
                  size={14}
                  style={{
                    transform:
                      activeDropdown === "product"
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                />
              </button>
              <AnimatePresence>
                {activeDropdown === "product" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "-1rem",
                      marginTop: "0.5rem",
                      width: "20rem",
                      backgroundColor: "#fff",
                      borderRadius: "0.75rem",
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      border: "1px solid rgba(0, 0, 0, 0.05)",
                      padding: "0.5rem",
                      zIndex: 50,
                    }}
                  >
                    {productMenuItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        style={{
                          display: "block",
                          padding: "0.75rem",
                          borderRadius: "0.5rem",
                          textDecoration: "none",
                          transition: "background-color 0.15s ease",
                          cursor: "pointer",
                        }}
                        whileHover={{ backgroundColor: "#f9fafb" }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.15, delay: index * 0.03 }}
                      >
                        <a
                          href={item.href}
                          style={{
                            display: "block",
                            textDecoration: "none",
                            color: "inherit",
                          }}
                        >
                          <div
                            style={{
                              fontWeight: "500",
                              color: "#111827",
                              fontSize: "0.875rem",
                              marginBottom: "0.25rem",
                            }}
                          >
                            {item.name}
                          </div>
                          <div
                            style={{
                              color: "#6b7280",
                              fontSize: "0.8rem",
                              lineHeight: "1.4",
                            }}
                          >
                            {item.description}
                          </div>
                        </a>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Changelog */}
            <a
              href="#"
              style={{
                color: "#374151",
                fontWeight: "500",
                fontSize: "0.95rem",
                textDecoration: "none",
                padding: "0.5rem 0",
                transition: "color 0.2s ease",
              }}
            >
              Changelog
            </a>

            {/* Manifesto */}
            <a
              href="#"
              style={{
                color: "#374151",
                fontWeight: "500",
                fontSize: "0.95rem",
                textDecoration: "none",
                padding: "0.5rem 0",
                transition: "color 0.2s ease",
              }}
            >
              Manifesto
            </a>

            {/* Resources Dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setActiveDropdown("resources")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  color: "#374151",
                  fontWeight: "500",
                  fontSize: "0.95rem",
                  padding: "0.5rem 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 0.2s ease",
                }}
              >
                <span>Resources</span>
                <ChevronDown
                  size={14}
                  style={{
                    transform:
                      activeDropdown === "resources"
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                />
              </button>
              <AnimatePresence>
                {activeDropdown === "resources" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    style={{
                      position: "absolute",
                      top: "100%",
                      right: "-1rem",
                      marginTop: "0.5rem",
                      width: "20rem",
                      backgroundColor: "#fff",
                      borderRadius: "0.75rem",
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      border: "1px solid rgba(0, 0, 0, 0.05)",
                      padding: "0.5rem",
                      zIndex: 50,
                    }}
                  >
                    {resourcesMenuItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        style={{
                          display: "block",
                          padding: "0.75rem",
                          borderRadius: "0.5rem",
                          textDecoration: "none",
                          transition: "background-color 0.15s ease",
                          cursor: "pointer",
                        }}
                        whileHover={{ backgroundColor: "#f9fafb" }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.15, delay: index * 0.03 }}
                      >
                        <a
                          href={item.href}
                          style={{
                            display: "block",
                            textDecoration: "none",
                            color: "inherit",
                          }}
                        >
                          <div
                            style={{
                              fontWeight: "500",
                              color: "#111827",
                              fontSize: "0.875rem",
                              marginBottom: "0.25rem",
                            }}
                          >
                            {item.name}
                          </div>
                          <div
                            style={{
                              color: "#6b7280",
                              fontSize: "0.8rem",
                              lineHeight: "1.4",
                            }}
                          >
                            {item.description}
                          </div>
                        </a>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right side buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <motion.button
              style={{
                color: "#374151",
                fontWeight: "500",
                fontSize: "0.95rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                transition: "all 0.2s ease",
              }}
              whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
              whileTap={{ scale: 0.98 }}
            >
              Log in
            </motion.button>
            <motion.button
              style={{
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "0.5rem",
                padding: "0.5rem 1rem",
                fontWeight: "500",
                fontSize: "0.95rem",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              whileHover={{ backgroundColor: "#1f2937", scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get started
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background:
          "linear-gradient(to bottom right, #f9fafb, #ffffff, #f3f4f6)",
      }}
    >
      <motion.div style={{ y, position: "absolute", inset: 0, zIndex: 0 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.05), transparent 70%)",
          }}
        ></div>
      </motion.div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "0 1rem",
          textAlign: "center",
          paddingTop: "5rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge
            style={{
              marginBottom: "2rem",
              backgroundColor: "rgba(0,0,0,0.1)",
              color: "#000",
              border: "none",
              padding: "0.5rem 1rem",
              fontSize: "0.875rem",
              fontWeight: "500",
              borderRadius: "9999px",
            }}
          >
            ✨ New: Advanced Analytics Dashboard
          </Badge>
        </motion.div>

        <motion.h1
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: "700",
            color: "#111827",
            marginBottom: "2rem",
            lineHeight: "1.1",
            letterSpacing: "-0.025em",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Build products that{" "}
          <span
            style={{
              display: "block",
              background:
                "linear-gradient(to right, #9333ea, #2563eb, #4f46e5)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            users love
          </span>
        </motion.h1>

        <motion.p
          style={{
            fontSize: "clamp(1.125rem, 3vw, 1.5rem)",
            color: "#4b5563",
            marginBottom: "3rem",
            maxWidth: "48rem",
            margin: "0 auto 3rem auto",
            lineHeight: "1.6",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          The complete platform for product teams to capture feedback,
          prioritize features, and build roadmaps that drive growth.
        </motion.p>

        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
            marginBottom: "4rem",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            style={{
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "9999px",
              padding: "1rem 2rem",
              fontSize: "1.125rem",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            Start free trial
            <ArrowRight size={20} />
          </motion.button>
          <motion.button
            style={{
              borderRadius: "9999px",
              padding: "1rem 2rem",
              fontSize: "1.125rem",
              fontWeight: "600",
              backgroundColor: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(4px)",
              border: "1px solid #d1d5db",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#374151",
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#fff",
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Play size={20} />
            Watch demo
          </motion.button>
        </motion.div>

        <motion.div
          style={{
            position: "relative",
            maxWidth: "80rem",
            margin: "0 auto",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "1rem",
              overflow: "hidden",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              backgroundColor: "#fff",
              padding: "0.75rem",
            }}
          >
            <div
              style={{
                aspectRatio: "16/9",
                background:
                  "linear-gradient(to bottom right, #f3f4f6, #e5e7eb)",
                borderRadius: "0.75rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <motion.div
                  style={{
                    width: "5rem",
                    height: "5rem",
                    backgroundColor: "#000",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem auto",
                    cursor: "pointer",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play
                    size={32}
                    color="#fff"
                    style={{ marginLeft: "0.25rem" }}
                  />
                </motion.div>
                <p
                  style={{
                    color: "#4b5563",
                    fontSize: "1.125rem",
                    fontWeight: "500",
                  }}
                >
                  Product Demo
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const FloatingIcons = () => {
    const icons = [
      { icon: <FileText />, top: "20%", left: "10%" },
      { icon: <LayoutDashboard />, top: "60%", right: "15%" },
      { icon: <MessageCircle />, bottom: "15%", left: "20%" },
    ];

    return (
      <>
        {icons.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: i * 0.5 }}
            style={{
              position: "absolute",
              ...item,
              zIndex: 0,
              color: "#888",
              fontSize: "1.5rem",
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </>
    );
  };

  const tabs = [
    {
      title: "Feedback Collection",
      icon: <Users size={24} />,
      content:
        "Capture and organize user feedback from multiple channels in one centralized hub.",
    },
    {
      title: "Smart Prioritization",
      icon: <Zap size={24} />,
      content:
        "Use AI-powered insights to prioritize features based on user impact and business value.",
    },
    {
      title: "Roadmap Planning",
      icon: <Shield size={24} />,
      content:
        "Create beautiful, shareable roadmaps that keep everyone aligned on product direction.",
    },
  ];

  return (
    <section style={{ padding: "6rem 0", backgroundColor: "#fff" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1rem" }}>
        <motion.div
          style={{ textAlign: "center", marginBottom: "5rem" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            style={{
              fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
              fontWeight: "700",
              color: "#111827",
              marginBottom: "1.5rem",
              lineHeight: "1.1",
            }}
          >
            Everything you need to build{" "}
            <span
              style={{
                display: "block",
                background: "linear-gradient(to right, #9333ea, #2563eb)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              better products
            </span>
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#4b5563",
              maxWidth: "48rem",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            From feedback collection to roadmap execution, Cycle provides all
            the tools your product team needs to succeed.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {tabs.map((tab, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: "2rem",
                    borderRadius: "1rem",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    backgroundColor: activeTab === index ? "#000" : "#f9fafb",
                    color: activeTab === index ? "#fff" : "#000",
                    boxShadow:
                      activeTab === index
                        ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                        : "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                    position: "relative",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveTab(index)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "inherit",
                      cursor: "pointer",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      zIndex: 1,
                    }}
                  />

                  {/* Hover icon animation */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: "absolute",
                      top: "-1.5rem",
                      right: "-1.5rem",
                      background: "#9333ea",
                      color: "#fff",
                      borderRadius: "50%",
                      padding: "0.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                    }}
                  >
                    {tab.icon}
                  </motion.div>

                  {/* Existing Content */}
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "center",
                      textAlign: "left",
                      position: "relative",
                      zIndex: 0,
                    }}
                  >
                    <div>{tab.icon}</div>
                    <div>
                      <h3
                        style={{
                          marginBottom: "0.25rem",
                          fontSize: "1.25rem",
                          fontWeight: "700",
                        }}
                      >
                        {tab.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "1rem",
                          lineHeight: "1.6",
                          margin: 0,
                        }}
                      >
                        {tab.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ position: "relative" }}
          >
            <FloatingIcons />
            <div
              style={{
                position: "relative",
                borderRadius: "1.5rem",
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                background:
                  "linear-gradient(to bottom right, #ddd6fe, #bfdbfe)",
                padding: "3rem",
              }}
            >
              <div
                style={{
                  aspectRatio: "1/1",
                  backgroundColor: "#fff",
                  borderRadius: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <motion.div
                    style={{
                      width: "6rem",
                      height: "6rem",
                      background:
                        "linear-gradient(to bottom right, #9333ea, #2563eb)",
                      borderRadius: "1.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.5rem auto",
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    <div style={{ color: "#fff" }}>{tabs[activeTab].icon}</div>
                  </motion.div>
                  <h4
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "700",
                      color: "#111827",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {tabs[activeTab].title}
                  </h4>
                  <p style={{ color: "#4b5563" }}>
                    Interactive feature preview
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AnalyticsSection = () => {
  return (
    <section style={{ padding: "6rem 0", backgroundColor: "#f9fafb" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1rem" }}>
        <motion.div
          style={{ textAlign: "center", marginBottom: "4rem" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            style={{
              fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
              fontWeight: "700",
              color: "#111827",
              marginBottom: "1.5rem",
              lineHeight: "1.1",
            }}
          >
            Powerful analytics at your{" "}
            <span
              style={{
                display: "block",
                background: "linear-gradient(to right, #9333ea, #2563eb)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              fingertips
            </span>
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#4b5563",
              maxWidth: "48rem",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Get deep insights into your product feedback with beautiful
            dashboards and actionable analytics.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            position: "relative",
            borderRadius: "1.5rem",
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            backgroundColor: "#fff",
            padding: "1rem",
          }}
        ></motion.div>
      </div>
    </section>
  );
};

const FeedbackCaptureSection = () => {
  const features = [
    {
      icon: <MessageCircle size={32} />,
      title: "Capture feedback from anywhere",
      description:
        "Connect your sources (Slack, Intercom, HubSpot, Email & more) to create feedback with context",
    },
    {
      icon: <Play size={32} />,
      title: "Record & transcribe customer calls",
      description:
        "Invite Cycle's recorder to any Zoom, G Meet or MS Teams call to fetch transcripts & summaries",
    },
    {
      icon: <FileText size={32} />,
      title: "Document your user research",
      description:
        "Co-write docs in real-time, add things like tables & toggles, and translate or rephrase with AI",
    },
  ];

  return (
    <section style={{ padding: "6rem 0", backgroundColor: "#fff" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1rem" }}>
        <motion.div
          style={{ textAlign: "center", marginBottom: "4rem" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            style={{
              fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
              fontWeight: "700",
              color: "#111827",
              marginBottom: "1.5rem",
              lineHeight: "1.1",
            }}
          >
            The fastest feedback capture{" "}
            <span
              style={{
                display: "block",
                background: "linear-gradient(to right, #9333ea, #2563eb)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              you'll ever see
            </span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginBottom: "4rem",
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                padding: "2rem",
                borderRadius: "1rem",
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "4rem",
                  height: "4rem",
                  backgroundColor: "#000",
                  borderRadius: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem auto",
                  color: "#fff",
                }}
              >
                {feature.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "#111827",
                  marginBottom: "1rem",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  color: "#4b5563",
                  lineHeight: "1.6",
                }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            position: "relative",
            borderRadius: "1.5rem",
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            backgroundColor: "#fff",
            padding: "1rem",
          }}
        ></motion.div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const companies = [
    "Beacons",
    "trovatrip",
    "TrustLayer",
    "Zipline",
    "strapi",
    "choose",
    "MOKA",
  ];

  return (
    <section style={{ padding: "6rem 0", backgroundColor: "#f9fafb" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1rem" }}>
        <motion.div
          style={{ textAlign: "center", marginBottom: "4rem" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            style={{
              fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
              fontWeight: "700",
              color: "#111827",
              marginBottom: "1.5rem",
              lineHeight: "1.1",
            }}
          >
            Trusted by leading{" "}
            <span
              style={{
                display: "block",
                background: "linear-gradient(to right, #9333ea, #2563eb)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              product teams
            </span>
          </h2>
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "3rem",
            marginBottom: "4rem",
            padding: "2rem 0",
          }}
        >
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#6b7280",
                opacity: 0.7,
              }}
            >
              {company}
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            maxWidth: "4xl",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "2rem",
              padding: "3rem",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              position: "relative",
            }}
          >
            <div
              style={{
                fontSize: "4rem",
                color: "#3b82f6",
                marginBottom: "1.5rem",
                fontFamily: "serif",
              }}
            >
              "
            </div>
            <blockquote
              style={{
                fontSize: "1.5rem",
                fontStyle: "italic",
                color: "#111827",
                lineHeight: "1.6",
                marginBottom: "2rem",
                fontWeight: "500",
              }}
            >
              Cycle is a slick AI tool that enables teams to build better
              products by getting smarter on what their customers want.
            </blockquote>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "50%",
                  backgroundColor: "#e5e7eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#374151",
                }}
              >
                OG
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontWeight: "600", color: "#111827" }}>
                  Olivier Godement
                </div>
                <div style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                  OpenAI
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Update the main component to include all sections:
export default function CycleLandingPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AnalyticsSection />
      <FeedbackCaptureSection />
      <TestimonialsSection />
    </div>
  );
}
