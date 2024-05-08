"use client";

import { Button } from "@/app/components/ui/button";
import { InfoIcon, PlayCircle } from "lucide-react";
import { Play } from "next/font/google";
import { useState } from "react";
import PlayVideoModal from "./PlayVideoModal";

interface iAppProps {
  age: number;
  duration: number;
  id: number;
  overview: string;
  releaseDate: number;
  title: string;
  youtubeUrl: string;
}

export default function MovieButtons({
  age,
  duration,
  id,
  overview,
  title,
  releaseDate,
  youtubeUrl,
}: iAppProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} className="text-lg font-medium">
        <PlayCircle className="mr-2 h-6 w-6" /> Play
      </Button>
      <Button
        onClick={() => setOpen(true)}
        className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white"
      >
        <InfoIcon className="mr-2 h-6 w-6" /> Learn More
      </Button>

      <PlayVideoModal
        state={open}
        changeState={setOpen}
        age={age}
        duration={duration}
        key={id}
        overview={overview}
        release={releaseDate}
        title={title}
        youtubeUrl={youtubeUrl}
      />
    </>
  );
}
