import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Sprout, 
  Cloud, 
  Bug, 
  TrendingUp, 
  MapPin, 
  Calendar,
  Camera,
  Mic,
  Bell,
  MessageCircle,
  Thermometer,
  Droplets,
  Sun,
  Wind
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [pestImage, setPestImage] = useState<File | null>(null);
  const [chatMessage, setChatMessage] = useState("");

  const handlePestImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPestImage(file);
      toast({
        title: "Image Uploaded",
        description: "Analyzing pest/disease... Please wait.",
      });
      
      // Simulate AI analysis
      setTimeout(() => {
        toast({
          title: "Analysis Complete",
          description: "Detected: Leaf Blight - Apply Copper Sulfate spray",
          variant: "default",
        });
      }, 2000);
    }
  };

  const handleChatSubmit = () => {
    if (!chatMessage.trim()) return;
    
    toast({
      title: "Advisory Sent",
      description: "AI is processing your query...",
    });
    
    setChatMessage("");
    
    // Simulate AI response
    setTimeout(() => {
      toast({
        title: "Smart Advisory",
        description: "Based on your location and crop, consider planting tomatoes next season.",
      });
    }, 1500);
  };

  const weatherData = {
    temperature: 28,
    humidity: 65,
    rainfall: 12,
    windSpeed: 8
  };

  const marketPrices = [
    { crop: "Rice", price: "₹2,100/quintal", trend: "up", change: "+2.5%" },
    { crop: "Wheat", price: "₹2,350/quintal", trend: "down", change: "-1.2%" },
    { crop: "Cotton", price: "₹5,800/quintal", trend: "up", change: "+3.8%" },
    { crop: "Sugarcane", price: "₹310/quintal", trend: "stable", change: "0%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <header className="bg-card shadow-soft border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <Sprout className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Smart Crop Advisory</h1>
                <p className="text-sm text-muted-foreground">AI-Powered Farming Assistant</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <select 
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-3 py-2 border rounded-md bg-background"
              >
                <option value="english">English</option>
                <option value="hindi">हिंदी</option>
                <option value="bengali">বাংলা</option>
                <option value="tamil">தமிழ்</option>
              </select>
              
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Alerts
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-soft">
            <CardHeader className="flex items-center space-x-2 pb-2">
              <Thermometer className="h-5 w-5 text-warning" />
              <CardTitle className="text-sm">Temperature</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{weatherData.temperature}°C</div>
              <p className="text-xs text-muted-foreground">Perfect for crops</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="flex items-center space-x-2 pb-2">
              <Droplets className="h-5 w-5 text-info" />
              <CardTitle className="text-sm">Humidity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{weatherData.humidity}%</div>
              <p className="text-xs text-muted-foreground">Optimal level</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="flex items-center space-x-2 pb-2">
              <Cloud className="h-5 w-5 text-primary" />
              <CardTitle className="text-sm">Rainfall</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{weatherData.rainfall}mm</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="flex items-center space-x-2 pb-2">
              <Wind className="h-5 w-5 text-accent" />
              <CardTitle className="text-sm">Wind Speed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{weatherData.windSpeed} km/h</div>
              <p className="text-xs text-muted-foreground">Gentle breeze</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="advisory" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="advisory">Crop Advisory</TabsTrigger>
            <TabsTrigger value="pest">Pest Detection</TabsTrigger>
            <TabsTrigger value="weather">Weather</TabsTrigger>
            <TabsTrigger value="market">Market Prices</TabsTrigger>
            <TabsTrigger value="chat">AI Assistant</TabsTrigger>
          </TabsList>

          {/* Crop Advisory Tab */}
          <TabsContent value="advisory" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Sprout className="h-5 w-5 text-success" />
                    <span>Recommended Crops</span>
                  </CardTitle>
                  <CardDescription>Based on your soil and weather conditions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-success">Tomato</h4>
                        <p className="text-sm text-muted-foreground">Best season: Kharif</p>
                      </div>
                      <Badge variant="secondary" className="bg-success text-success-foreground">
                        95% Match
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-primary">Rice</h4>
                        <p className="text-sm text-muted-foreground">Best season: Monsoon</p>
                      </div>
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        88% Match
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-accent">Cotton</h4>
                        <p className="text-sm text-muted-foreground">Best season: Summer</p>
                      </div>
                      <Badge variant="secondary" className="bg-accent text-accent-foreground">
                        82% Match
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Fertilizer Schedule</span>
                  </CardTitle>
                  <CardDescription>Upcoming fertilizer applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-success rounded-full"></div>
                      <div className="flex-1">
                        <p className="font-medium">NPK Fertilizer</p>
                        <p className="text-sm text-muted-foreground">Apply in 2 days</p>
                      </div>
                      <Badge variant="outline">Pending</Badge>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-warning rounded-full"></div>
                      <div className="flex-1">
                        <p className="font-medium">Urea Application</p>
                        <p className="text-sm text-muted-foreground">Apply in 1 week</p>
                      </div>
                      <Badge variant="outline">Scheduled</Badge>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-muted rounded-full"></div>
                      <div className="flex-1">
                        <p className="font-medium">Organic Compost</p>
                        <p className="text-sm text-muted-foreground">Applied 3 days ago</p>
                      </div>
                      <Badge variant="secondary">Completed</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Pest Detection Tab */}
          <TabsContent value="pest" className="space-y-6">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bug className="h-5 w-5 text-destructive" />
                  <span>Pest & Disease Detection</span>
                </CardTitle>
                <CardDescription>Upload crop images for AI-powered analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Camera className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-lg font-medium mb-2">Upload Crop Image</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Take a clear photo of affected leaves or plants
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePestImageUpload}
                    className="hidden"
                    id="pest-image"
                  />
                  <label htmlFor="pest-image">
                    <Button className="cursor-pointer">
                      <Camera className="h-4 w-4 mr-2" />
                      Choose Image
                    </Button>
                  </label>
                </div>
                
                {pestImage && (
                  <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                        <Bug className="h-4 w-4 text-success-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-success">Analysis in Progress</p>
                        <p className="text-sm text-muted-foreground">AI is examining your image...</p>
                      </div>
                    </div>
                    <Progress value={75} className="mt-3" />
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Weather Tab */}
          <TabsContent value="weather" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Sun className="h-5 w-5 text-warning" />
                    <span>Weather Forecast</span>
                  </CardTitle>
                  <CardDescription>7-day weather outlook</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {['Today', 'Tomorrow', 'Day 3', 'Day 4', 'Day 5'].map((day, index) => (
                      <div key={day} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Sun className="h-5 w-5 text-warning" />
                          <span className="font-medium">{day}</span>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{28 + index}°C / {20 + index}°C</p>
                          <p className="text-sm text-muted-foreground">Sunny</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="h-5 w-5 text-info" />
                    <span>Weather Alerts</span>
                  </CardTitle>
                  <CardDescription>Important weather notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-warning/10 border border-warning/20 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <Bell className="h-4 w-4 text-warning" />
                        <span className="font-medium text-warning">Heavy Rain Alert</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Expected 50mm rainfall in next 48 hours. Prepare drainage.
                      </p>
                    </div>
                    
                    <div className="bg-info/10 border border-info/20 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <Thermometer className="h-4 w-4 text-info" />
                        <span className="font-medium text-info">Temperature Drop</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Night temperature may drop to 15°C. Protect sensitive crops.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Market Prices Tab */}
          <TabsContent value="market" className="space-y-6">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-success" />
                  <span>Market Prices</span>
                </CardTitle>
                <CardDescription>Latest mandi rates and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {marketPrices.map((item) => (
                    <div key={item.crop} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{item.crop}</h4>
                        <p className="text-2xl font-bold text-primary">{item.price}</p>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={item.trend === 'up' ? 'default' : item.trend === 'down' ? 'destructive' : 'secondary'}
                          className={
                            item.trend === 'up' ? 'bg-success text-success-foreground' :
                            item.trend === 'down' ? 'bg-destructive text-destructive-foreground' :
                            'bg-muted text-muted-foreground'
                          }
                        >
                          {item.change}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">vs last week</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Chat Tab */}
          <TabsContent value="chat" className="space-y-6">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <span>AI Farming Assistant</span>
                </CardTitle>
                <CardDescription>Ask questions about farming, crops, or get personalized advice</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4 min-h-[200px]">
                  <div className="space-y-3">
                    <div className="bg-primary/10 rounded-lg p-3 ml-8">
                      <p className="text-sm"><strong>AI Assistant:</strong> Hello! I'm your smart farming assistant. How can I help you today?</p>
                    </div>
                    
                    <div className="bg-card rounded-lg p-3 mr-8 shadow-sm">
                      <p className="text-sm"><strong>You:</strong> What's the best time to plant tomatoes?</p>
                    </div>
                    
                    <div className="bg-primary/10 rounded-lg p-3 ml-8">
                      <p className="text-sm"><strong>AI Assistant:</strong> Based on your location and current weather, the best time to plant tomatoes is during the Kharif season (June-July). The soil temperature should be around 16-29°C for optimal germination.</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Textarea
                    placeholder="Ask about crops, weather, fertilizers, pest control..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    className="flex-1"
                    rows={2}
                  />
                  <div className="flex flex-col space-y-2">
                    <Button onClick={handleChatSubmit} className="bg-gradient-primary">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mic className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    Crop recommendations
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    Fertilizer advice
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    Pest control
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    Weather forecast
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;