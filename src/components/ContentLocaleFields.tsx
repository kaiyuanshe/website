import { Form, InputNumber, Select } from "antd";
import { useTranslation } from "@/hooks/useTranslation";

export function getContentLocaleValues(values: Record<string, unknown>) {
  const translationOf = Number(values.translationOf);

  return {
    locale: typeof values.locale === "string" ? values.locale : undefined,
    translation_of:
      Number.isInteger(translationOf) && translationOf > 0
        ? translationOf
        : undefined,
  };
}

export default function ContentLocaleFields() {
  const { locale, translateText } = useTranslation();

  return (
    <>
      <Form.Item
        label={translateText("内容语言")}
        name="locale"
        initialValue={locale}
        rules={[{ required: true, message: translateText("请选择内容语言") }]}
      >
        <Select
          options={[
            { value: "zh-CN", label: translateText("简体中文") },
            { value: "en", label: "English" },
          ]}
        />
      </Form.Item>
      <Form.Item
        label={translateText("关联原文 ID（可选）")}
        name="translationOf"
        tooltip={translateText(
          "创建英文版本时，填写对应中文内容的 ID，以便切换语言时自动跳转。",
        )}
      >
        <InputNumber min={1} precision={0} style={{ width: "100%" }} />
      </Form.Item>
    </>
  );
}
