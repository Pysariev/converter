    Application for converting between distance units with support for metric and imperial units,
the application recognizes meters (m), centimeters (cm), inches (in) and feet (ft), and supports conversion between any
units.
    It is also possible to expand the list of supported units by setting conversion rules using a JSON file.
    Incoming parameters:
An object in JSON format containing the distance specified for conversion (distance) with value (value) and scale (unit), as well as the unit designation for the scale to which the conversion should be made (convert_to).
    For example:
{"distance": {"unit": "m", "value": 0.5}, "convert_to": "ft"}
    Output:
An object in JSON format containing the received distance value, rounded up to
hundredths, as well as the designation of the corresponding unit of measure.
    For example:
{"unit": "ft", "value": 1.64}

/////////////////////////

    Приложение для конвертации между единицами измерения расстояния с поддержкой метрической и имперской систем мер,
приложение распознает метры (m), сантиметры (cm), дюймы (in) и футы (ft), и поддерживает конвертацию между любыми
единицами.
    Также реализована возможность расширять список поддерживаемых единиц путем задания правил конвертации посредством JSON файла. 
    Входящие параметры:
Объект в JSON формате, содержащий расстояние заданное для конвертации (distance) со значением (value) и шкалой (unit), a также обозначение единицы для шкалы, в которую должна быть произведена конвертация (convert_to).
    Например:
{"distance": {"unit": "m", "value": 0.5}, "convert_to": "ft"}
    Выходные данные:
Объект в JSON формате, содержащий полученное значение расстояния, округленное до
сотых, а также обозначение соответствующей единицы измерения.
    Например:
{"unit": "ft", "value": 1.64}