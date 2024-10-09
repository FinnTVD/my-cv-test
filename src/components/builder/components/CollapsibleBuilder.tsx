"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

export function CollapsibleBuilder({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <CollapsibleTrigger asChild>
        <div className="flex justify-center">
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <span>{title}</span>
            <ChevronsUpDown className="h-4 w-4 stroke-black flex-shrink-0" />
            <span className="sr-only">Toggle</span>
          </Button>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>{children}</CollapsibleContent>
    </Collapsible>
  );
}
