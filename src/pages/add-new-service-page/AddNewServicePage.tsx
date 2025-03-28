import React from 'react';
import './AddNewServicePage.scss';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from "@/components/ui/textarea"

const AddNewServicePage = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {

  return (
    <div className='add-new-service-page'>
        <div className={cn("flex flex-col gap-6 w-full", className)} {...props}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Add New Service</CardTitle>
                  <CardDescription>
                    Enter service details to add a new service
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="flex flex-col gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Service Name</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter Service Name"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="imageURL">Service Image</Label>
                        <Input
                          id="imageURL"
                          type="text"
                          placeholder="Enter Service Image URL"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="price">Starting Price</Label>
                        <Input
                          id="price"
                          type="text"
                          placeholder="Enter Service Starting Price ($)"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="description">Service Description</Label>
                        <Textarea
                          id="description"
                          placeholder="Enter Service Description"
                          required
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

}

export default AddNewServicePage;