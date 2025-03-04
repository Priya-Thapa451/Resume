import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaLinkedin } from "react-icons/fa";

export function CardWithLinkedIn() {
  return (
    <Card className="w-[350px] p-4 border border-gray-300">
      <div className="mb-3 ">
        <CardDescription>Paste link to generate the resume.</CardDescription>
      </div>
      <CardContent>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="lg">
              LinkedIn
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>LinkedIn</DialogTitle>
              <DialogDescription>
                Here paste linkedIN account.
              </DialogDescription>
            </DialogHeader>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="link">Paste a Link</Label>
              <div className="relative w-full">
                <FaLinkedin
                  size={24}
                  className="text-blue-600 absolute left-4 top-1/2 -translate-y-1/2"
                />
                <Input
                  id="link"
                  type="url"
                  placeholder="https://example.com"
                  className="pl-12"
                />
              </div>
            </div>

            <DialogFooter>
              <Button type="submit">Generate</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
