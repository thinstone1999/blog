"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Trash2, Plus, Download, Upload, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

// 定义流量数据类型
interface TrafficData {
  id: string;
  category: string;
  amount: number;
  date: string; // YYYY-MM format
}

// 定义流量类别类型
interface TrafficCategory {
  id: string;
  name: string;
}

const TrafficManagementPage: React.FC = () => {
  // 流量数据状态
  const [trafficData, setTrafficData] = useState<TrafficData[]>([]);

  // 流量类别状态
  const [categories, setCategories] = useState<TrafficCategory[]>([
    { id: "1", name: "工作" },
    { id: "2", name: "生活" },
    { id: "3", name: "娱乐" },
    { id: "4", name: "学习" },
  ]);

  // 表单状态
  const [formData, setFormData] = useState({
    category: "",
    amount: "",
    year: String(new Date().getFullYear()), // 年份
    month: String(new Date().getMonth() + 1), // 月份
  });

  // 新类别输入状态
  const [newCategory, setNewCategory] = useState("");
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showCategoryManager, setShowCategoryManager] = useState(false);

  // 分页和筛选状态
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // 每页显示10条
  const [filterYear, setFilterYear] = useState(""); // 按年度筛选

  // 筛选和排序数据
  const filteredAndSortedData = trafficData
    .filter((item) => {
      if (filterYear) {
        const [year] = item.date.split("-");
        return year === filterYear;
      }
      return true;
    })
    .sort((a, b) => b.date.localeCompare(a.date)); // 按日期降序排列

  // 计算分页数据
  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredAndSortedData.slice(startIndex, endIndex);

  // 导入导出功能
  const exportData = () => {
    // 创建CSV内容
    let csvContent = "id,category,amount,date\n"; // 表头

    // 添加流量数据
    trafficData.forEach((item) => {
      // 获取类别名称
      const categoryName =
        categories.find((cat) => cat.id === item.category)?.name ||
        item.category;

      // 添加数据行，处理可能包含逗号的值
      csvContent += `"${item.id}","${categoryName}","${item.amount}","${item.date}"\n`;
    });

    // 创建Blob对象并下载
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `traffic-data-${new Date().toISOString().slice(0, 19)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("数据导出成功");
  };

  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        if (!content) {
          toast.error("文件内容为空");
          return;
        }

        // 解析CSV内容
        const lines = content.split("\n");
        if (lines.length < 2) {
          toast.error("CSV文件格式不正确");
          return;
        }


        // 解析数据行
        const newTrafficData: TrafficData[] = [];
        const newCategoriesMap: { [name: string]: string } = {};

        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].trim();
          if (!line) continue; // 跳过空行

          // 处理可能包含引号和逗号的值
          const values: string[] = [];
          let currentValue = "";
          let insideQuotes = false;

          for (let j = 0; j < line.length; j++) {
            const char = line[j];

            if (char === '"') {
              if (insideQuotes && j + 1 < line.length && line[j + 1] === '"') {
                // 处理双引号转义
                currentValue += '"';
                j++; // 跳过下一个引号
              } else {
                // 切换引号状态
                insideQuotes = !insideQuotes;
              }
            } else if (char === "," && !insideQuotes) {
              values.push(currentValue.trim().replace(/^"|"$/g, "")); // 移除首尾引号
              currentValue = "";
            } else {
              currentValue += char;
            }
          }

          // 添加最后一个值
          values.push(currentValue.trim().replace(/^"|"$/g, ""));

          // 确保有足够的值
          if (values.length >= 4) {
            // 查找或创建类别
            let categoryId = newCategoriesMap[values[1]]; // values[1] 是类别名称
            if (!categoryId) {
              // 检查是否已存在于现有类别中
              const existingCategory = categories.find(
                (cat) => cat.name === values[1],
              );
              if (existingCategory) {
                categoryId = existingCategory.id;
              } else {
                // 创建新类别
                categoryId =
                  Date.now().toString() +
                  Math.random().toString(36).substr(2, 5);
                newCategoriesMap[values[1]] = categoryId;
              }
            }

            // 创建流量数据项
            const newItem: TrafficData = {
              id: values[0],
              category: categoryId,
              amount: parseFloat(values[2]),
              date: values[3],
            };

            newTrafficData.push(newItem);
          }
        }

        // 更新状态
        setTrafficData(newTrafficData);

        // 更新类别（如果需要）
        const newCategoriesList = Object.entries(newCategoriesMap).map(
          ([name, id]) => ({
            id,
            name,
          }),
        );

        if (newCategoriesList.length > 0) {
          // 合并现有类别和新类别
          const allCategories = [...categories];
          newCategoriesList.forEach((newCat) => {
            const exists = allCategories.some(
              (cat) => cat.id === newCat.id || cat.name === newCat.name,
            );
            if (!exists) {
              allCategories.push(newCat);
            }
          });
          setCategories(allCategories);
        }

        toast.success("数据导入成功");
      } catch (error) {
        console.error("导入数据失败:", error);
        toast.error("导入数据失败，请检查文件格式");
      }
    };
    reader.readAsText(file);
    // 重置input，允许重复导入同一文件
    event.target.value = "";
  };

  // 从 localStorage 加载数据
  useEffect(() => {
    const savedData = localStorage.getItem("trafficData");
    const savedCategories = localStorage.getItem("trafficCategories");

    if (savedData) {
      try {
        setTrafficData(JSON.parse(savedData));
      } catch (e) {
        console.error("解析流量数据失败:", e);
      }
    }

    if (savedCategories) {
      try {
        setCategories(JSON.parse(savedCategories));
      } catch (e) {
        console.error("解析流量类别失败:", e);
      }
    }
  }, []);

  // 保存数据到 localStorage
  useEffect(() => {
    localStorage.setItem("trafficData", JSON.stringify(trafficData));
  }, [trafficData]);

  useEffect(() => {
    localStorage.setItem("trafficCategories", JSON.stringify(categories));
  }, [categories]);

  // 处理表单输入变化
  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as
      | HTMLInputElement
      | HTMLSelectElement;
    const { name, value } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 添加新流量数据
  const handleAddTraffic = () => {
    if (
      !formData.category ||
      !formData.amount ||
      !formData.year ||
      !formData.month
    ) {
      toast.error("请填写完整信息");
      return;
    }

    const amount = parseFloat(formData.amount);
    if (isNaN(amount) || amount <= 0) {
      toast.error("请输入有效的数量");
      return;
    }

    // 创建月份标识符，格式为 YYYY-MM
    const monthIdentifier = `${formData.year}-${formData.month.padStart(
      2,
      "0",
    )}`;

    const newTraffic: TrafficData = {
      id: Date.now().toString(), // 使用时间戳作为唯一ID
      category: formData.category,
      amount: amount,
      date: monthIdentifier, // 使用月份标识符而不是具体日期
    };

    setTrafficData((prev) => [...prev, newTraffic]);

    // 重置表单
    setFormData({
      category: "",
      amount: "",
      year: String(new Date().getFullYear()),
      month: String(new Date().getMonth() + 1),
    });

    toast.success("流量数据已添加");
  };

  // 删除流量数据
  const handleDeleteTraffic = (id: string) => {
    setTrafficData((prev) => prev.filter((item) => item.id !== id));
    toast.success("流量数据已删除");
  };

  // 编辑流量数据
  const [editingRecord, setEditingRecord] = useState<TrafficData | null>(null);

  const handleEditTraffic = (record: TrafficData) => {
    setEditingRecord(record);
    // 解析月份标识符
    const [year, month] = record.date.split("-");
    setFormData({
      category: record.category,
      amount: String(record.amount),
      year,
      month,
    });
  };

  const handleUpdateTraffic = () => {
    if (
      !formData.category ||
      !formData.amount ||
      !formData.year ||
      !formData.month
    ) {
      toast.error("请填写完整信息");
      return;
    }

    const amount = parseFloat(formData.amount);
    if (isNaN(amount) || amount <= 0) {
      toast.error("请输入有效的数量");
      return;
    }

    // 创建月份标识符，格式为 YYYY-MM
    const monthIdentifier = `${formData.year}-${formData.month.padStart(
      2,
      "0",
    )}`;

    setTrafficData((prev) =>
      prev.map((item) =>
        item.id === editingRecord?.id
          ? {
              ...item,
              category: formData.category,
              amount,
              date: monthIdentifier,
            }
          : item,
      ),
    );

    setEditingRecord(null);
    setFormData({
      category: "",
      amount: "",
      year: String(new Date().getFullYear()),
      month: String(new Date().getMonth() + 1),
    });
    toast.success("流量数据已更新");
  };

  const handleCancelEdit = () => {
    setEditingRecord(null);
    setFormData({
      category: "",
      amount: "",
      year: String(new Date().getFullYear()),
      month: String(new Date().getMonth() + 1),
    });
  };

  // 删除类别
  const handleDeleteCategory = (categoryId: string) => {
    // 检查是否有流量数据正在使用该类别
    const hasData = trafficData.some((item) => item.category === categoryId);
    if (hasData) {
      toast.error("该类别下有数据，无法删除");
      return;
    }

    setCategories((prev) => prev.filter((cat) => cat.id !== categoryId));
    // 如果删除的是当前选中的类别，则清空选择
    if (formData.category === categoryId) {
      setFormData((prev) => ({ ...prev, category: "" }));
    }
    toast.success("类别已删除");
  };

  // 添加新类别
  const handleAddCategory = () => {
    if (!newCategory.trim()) {
      toast.error("请输入类别名称");
      return;
    }

    // 检查是否已存在相同名称的类别
    const exists = categories.some((cat) => cat.name === newCategory.trim());
    if (exists) {
      toast.error("该类别已存在");
      return;
    }

    const newCat: TrafficCategory = {
      id: Date.now().toString(),
      name: newCategory.trim(),
    };

    setCategories((prev) => [...prev, newCat]);
    setFormData((prev) => ({ ...prev, category: newCat.id }));
    setNewCategory("");
    setShowAddCategory(false);
    toast.success("类别已添加");
  };

  return (
    <div className="flex flex-col h-full w-full max-w-screen-xl mx-auto p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          流量管理
        </h1>
        <div className="flex flex-wrap gap-3 justify-end">
          <button
            onClick={exportData}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm min-w-[96px] flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            导出CSV
          </button>
          <label className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 text-sm cursor-pointer min-w-[96px] text-center flex items-center justify-center gap-2">
            <Upload className="w-4 h-4" />
            导入数据
            <input
              type="file"
              accept=".csv"
              onChange={importData}
              className="hidden"
            />
          </label>
          <button
            onClick={() => (window.location.href = "/")}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 text-sm flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </button>
        </div>
      </div>

      {/* 添加流量数据表单 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>添加流量数据</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-1">
              <div className="flex items-center justify-between mb-1">
                <Label className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  流量类别
                </Label>
                <button
                  type="button"
                  onClick={() => setShowCategoryManager(!showCategoryManager)}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  管理
                </button>
              </div>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({...formData, category: value})}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="请选择类别" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {/* 显示类别列表及删除按钮 */}
              {showCategoryManager && (
                <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-sm font-medium mb-2 text-gray-600 dark:text-gray-400">
                    类别管理:
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {categories.map((category) => (
                      <div
                        key={category.id}
                        className="flex items-center bg-blue-50 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1 text-sm"
                      >
                        <span className="text-blue-700 dark:text-blue-300">
                          {category.name}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleDeleteCategory(category.id)}
                          className="ml-2 text-red-500 hover:text-red-700 dark:hover:text-red-400"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>

                  {showAddCategory ? (
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        placeholder="输入新类别"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        className="flex-grow"
                      />
                      <Button
                        onClick={handleAddCategory}
                        size="sm"
                      >
                        添加
                      </Button>
                      <Button
                        onClick={() => setShowAddCategory(false)}
                        size="sm"
                        variant="outline"
                      >
                        取消
                      </Button>
                    </div>
                  ) : (
                    <Button
                      type="button"
                      onClick={() => setShowAddCategory(true)}
                      variant="ghost"
                      size="sm"
                      className="text-sm text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      添加新类别
                    </Button>
                  )}
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <Label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-400">
                数量
              </Label>
              <Input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                placeholder="请输入数量"
                min="0"
                step="0.01"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 lg:col-span-2">
              <div>
                <Label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-400">
                  年份
                </Label>
                <Select
                  value={formData.year}
                  onValueChange={(value) => setFormData({...formData, year: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => {
                      const year = new Date().getFullYear() - 5 + i;
                      return (
                        <SelectItem key={year} value={String(year)}>
                          {year}年
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-400">
                  月份
                </Label>
                <Select
                  value={formData.month}
                  onValueChange={(value) => setFormData({...formData, month: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 12 }, (_, i) => {
                      const month = i + 1;
                      return (
                        <SelectItem key={month} value={String(month)}>
                          {month}月
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="sm:col-span-2 lg:col-span-4 flex flex-col sm:flex-row sm:items-end gap-2 mt-2">
              {editingRecord ? (
                <>
                  <Button
                    onClick={handleUpdateTraffic}
                    className="flex-1"
                  >
                    更新数据
                  </Button>
                  <Button
                    onClick={handleCancelEdit}
                    variant="outline"
                    className="flex-1"
                  >
                    取消
                  </Button>
                </>
              ) : (
                <Button
                  onClick={handleAddTraffic}
                  className="flex-1 bg-green-500 hover:bg-green-600"
                >
                  添加数据
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 流量数据列表 */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <CardTitle>流量数据列表</CardTitle>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <Select
                value={filterYear}
                onValueChange={(value) => {
                  setFilterYear(value);
                  setCurrentPage(1); // 重置到第一页
                }}
              >
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="全部年度" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 10 }, (_, i) => {
                    const year = new Date().getFullYear() - 5 + i;
                    return (
                      <SelectItem key={year} value={String(year)}>
                        {year}年
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {trafficData.length === 0 ? (
            <div className="flex items-center justify-center h-64">
              <p className="text-gray-500 dark:text-gray-400 text-center">
                暂无流量数据，请添加数据
              </p>
            </div>
          ) : (
            <>
              {/* 筛选和排序后的数据 */}
              {filteredAndSortedData.length === 0 ? (
                <div className="flex items-center justify-center h-64">
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    没有符合条件的数据
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2 px-4 text-left">类别</th>
                        <th className="py-2 px-4 text-left">数量</th>
                        <th className="py-2 px-4 text-left">时间</th>
                        <th className="py-2 px-4 text-left">操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentData.map((item) => {
                        const category = categories.find(cat => cat.id === item.category)?.name || "未知类别";
                        return (
                          <tr key={item.id} className="border-b">
                            <td className="py-2 px-4">{category}</td>
                            <td className="py-2 px-4">{item.amount.toFixed(2)}</td>
                            <td className="py-2 px-4">{item.date}</td>
                            <td className="py-2 px-4">
                              <div className="flex gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleEditTraffic(item)}
                                >
                                  编辑
                                </Button>
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  onClick={() => handleDeleteTraffic(item.id)}
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}

              {/* 分页控件 */}
              {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 pt-4 border-t">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    显示 {startIndex + 1}-
                    {Math.min(endIndex, filteredAndSortedData.length)} 条，共{" "}
                    {filteredAndSortedData.length} 条
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={currentPage === 1}
                      variant="outline"
                    >
                      上一页
                    </Button>
                    
                    {/* 页码按钮 */}
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        // 总页数小于等于5，显示所有页码
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        // 当前页靠近开头，显示前5页
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        // 当前页靠近结尾，显示后5页
                        pageNum = totalPages - 4 + i;
                      } else {
                        // 当前页在中间，显示当前页前后各两页
                        pageNum = currentPage - 2 + i;
                      }
                      
                      return (
                        <Button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          variant={currentPage === pageNum ? "default" : "outline"}
                        >
                          {pageNum}
                        </Button>
                      );
                    })}
                    
                    <Button
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                      variant="outline"
                    >
                      下一页
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TrafficManagementPage;