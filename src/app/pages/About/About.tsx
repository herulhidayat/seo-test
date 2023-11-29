import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate()
  return (
    <>
      This is About
      <Button variant="primary" onClick={() => navigate('/')}>Home</Button>
    </>
  )
}