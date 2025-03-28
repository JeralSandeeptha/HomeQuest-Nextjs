"use client";
import React, { FormEvent, useState } from "react";
import "./AddNewServicePage.scss";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import createService from "@/services/services-service/createService/createService";
import useNotification from "@/hooks/useNotification";
import { useRouter } from "next/navigation";

const AddNewServicePage = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const context = useNotification();

  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({
      name,
      image,
      price,
      description,
    });

    if (
      ![name, image, price, description].every(
        (field) => field.trim().length > 0
      )
    ) {
      alert("Please fill all the required fields!");
      return;
    }

    const service = {
      service_name: name,
      service_image: image,
      service_start_price: price,
      service_description: description,
    };

    createService({
      setIsError: context.setIsError,
      setIsSuccess: context.setIsSuccess,
      service: service,
      router: router,
    });
  };

  return (
    <div className="add-new-service-page">
      <div className={cn("flex flex-col gap-6 w-full", className)} {...props}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Add New Service</CardTitle>
            <CardDescription>
              Enter service details to add a new service
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Service Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter Service Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="imageURL">Service Image</Label>
                  <Input
                    id="imageURL"
                    type="text"
                    placeholder="Enter Service Image URL"
                    required
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="price">Starting Price</Label>
                  <Input
                    id="price"
                    type="text"
                    placeholder="Enter Service Starting Price ($)"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Service Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter Service Description"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Add
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddNewServicePage;
