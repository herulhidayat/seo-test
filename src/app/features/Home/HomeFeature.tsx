import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function HomeFeature() {
  const navigate = useNavigate()
  return (
    <>
      This is Home
      <Button variant="primary" onClick={() => navigate('/home/about')}>About</Button>
    </>
  )
}